import { FunctionForm } from "function-form";
import { AuthenticationLayout } from "layout";
import { Div } from "react-with-native";
import Index from "ai-functions-node/db/ts-functions/summarize-meeting-with-context.json";
import { useAlert } from "react-with-native-alert";
import { RealApiReturnType } from "api-types";
import { queries } from "api";
import { Device } from "peer-types";
import { Storing } from "model-types";
import { FancyLoader } from "fancy-loader";
import { AppsMenu } from "apps-menu";
import { QueryPageProps } from "../../util/types";
import { SearchBar } from "layout";
import { ALink } from "next-a-link";

const quotes = [
  // "A day without coding is a day unlived",
  "Clarity AI is creating a search experience with focus on benefiting humanity, not to sell you stuff",
  "If you want to immerse yourself with AI tools as soon as possible, use Clarity AI",
  "The industrial revolution of AI is at your fingertips",
  "Automate your job and go have fun",
];

const HomePage = () => {
  const alert = useAlert();
  const meQuery = queries.useGetMeWithContext();
  const explorableBasePathsWithContextQuery =
    queries.useGetExplorableBasePathsWithContext();

  const device: Storing<Device> | undefined = meQuery.data?.result?.device;
  const isLoggedIn = !!device?.currentPersonCalculated;
  const hour = new Date(Date.now()).getHours();
  const quote = quotes[hour % quotes.length];

  return (
    <Div className="flex flex-1 min-h-[90vh] items-center flex-col justify-around">
      {meQuery.isLoading ? (
        <FancyLoader big />
      ) : isLoggedIn ? (
        <Div className="h-[80vh] flex flex-col">
          <Div>
            <Div className="text-4xl text-blue-500 drop-shadow">
              Welcome back, {device?.currentPersonCalculated?.name}
            </Div>
            {explorableBasePathsWithContextQuery.data?.result?.map(
              (basePath) => {
                return (
                  <ALink href={`/files/${basePath.projectRelativePath}`}>
                    {basePath.name}
                  </ALink>
                );
              }
            )}
            <Div className="italic text-black dark:text-white">{quote}</Div>
            <SearchBar />
          </Div>
          <Div className="max-w-xl mt-20">
            <AppsMenu />
          </Div>
          {/* 
          Get search component here
          
          - a search box to search files, db, functions, and google leading to `/search`
          - a link to "see my files" going to `/files`
          
          */}
        </Div>
      ) : (
        <>
          <Div className="text-4xl text-blue-500 drop-shadow">
            Share meeting insights for free
          </Div>
          <FunctionForm
            tsFunction={Index}
            withApiResult={(
              result: RealApiReturnType<"summarizeMeetingWithContext">
            ) => {
              console.log({ result });
              alert?.("Success", result.result?.message);
            }}
            projectRelativeStorageFilePath="assets"
          />
          <p>
            Clarity AI generates an automated summary to share with everyone and
            to help you remember everything.
          </p>
          <p className="text-center">
            Please sign up with the form above to get early access.
          </p>
          <p>
            We'll also send you information about events and new updates
            (maximum once per week).
          </p>
        </>
      )}
    </Div>
  );
};

export default HomePage;

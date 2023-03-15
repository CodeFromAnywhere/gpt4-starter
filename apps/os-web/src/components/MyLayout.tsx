import { queries } from "api";
import { Explorer } from "explorer-ui";
import { destructureOptionalObject } from "js-util";
import { AuthenticationLayout, usePing } from "layout";
import { useRouter } from "next/router";
import { useSelect } from "react-with-native-select";

export const MyLayout = (props: {
  NextPage: React.ReactNode;
  pageProps: any;
}) => {
  const { NextPage, pageProps } = props;
  const queryPathsQuery = queries.useGetFunctionQueryPaths();
  const router = useRouter();
  //const { isOffline } = usePing();
  // if (isOffline) {
  //   router.push("/settings");
  // }

  // NB: first path before / (can be function/* or database/*)
  const page = router.asPath.split("/")[1];

  const menu = queryPathsQuery.data?.result;
  const functionMenuProps = {
    isLoading: queryPathsQuery.isLoading,
    webPagesFlat: menu?.flat,
    webPagesNested: menu?.nested,
  };

  const items = [
    { label: "🪺 Nested", value: "nested" },
    { label: "⚡️ Operaton-based", value: "operation" },
    { label: "👩‍🌾 Flat", value: "flat" },
  ];
  const [SelectMenu, menuType] = useSelect(items, items[0]);

  const dbMenuQuery = queries.useGetNestedDatabaseMenu({
    noOperationName: menuType?.value === "flat",
    noOperationPath: menuType?.value !== "nested",
    noSrcRelativeFolder: menuType?.value !== "nested",
    noPrefix: true,
  });

  const { flat, nested } = destructureOptionalObject(dbMenuQuery.data?.result);

  const dbMenuProps = {
    // NB: passionfruit wants this xD just make a layoutconfig in the PublicBundleConfig, or make it editable per user (later)
    // menuPosition: "left",
    menuHeader: () => {
      return <SelectMenu />;
    },
    isLoading: dbMenuQuery.isLoading,
    webPagesFlat: flat,
    webPagesNested: nested,
  };

  const menuProps =
    page === "database"
      ? dbMenuProps
      : page === "function"
      ? functionMenuProps
      : undefined;

  return (
    <AuthenticationLayout
      pageProps={pageProps}
      nextPage={NextPage}
      menu={menuProps}
      customMenu={menuProps ? undefined : <Explorer />}
    />
  );
};

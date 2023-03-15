import { createStore } from "react-with-native-store";
import { apiStoreInitialValues } from "api-store";
import { nestedMenuStoreInitialValues } from "nested-menu";
import { writerInitialValues } from "writer-input";
import { fileTabsInitialValues } from "file-tabs";
import { tabsStoreInitialValues } from "tabs";
import { dbCrudInitialValues } from "db-crud";
import { generativeWebInitialValues } from "generative-ui";
import { explorerInitialValues } from "explorer-ui";

const functionWebInitialValues: {
  executionId: string;
  initialValues: any[] | undefined;
} = { executionId: "__NONE__", initialValues: [] };

const initialValues = {
  ...explorerInitialValues,
  ...apiStoreInitialValues,
  ...generativeWebInitialValues,
  ...nestedMenuStoreInitialValues,
  ...writerInitialValues,
  ...fileTabsInitialValues,
  ...dbCrudInitialValues,
  ...tabsStoreInitialValues,
  ...functionWebInitialValues,
};
export const { StoreProvider, useStore } = createStore(initialValues);

import { LogLevel } from "./logging";

import type { StorageProtocol } from "../storage";
import type { ExportActionOptions, ImportActionOptions } from "./config";

export type ToParentMessage =
  | LogMessage
  | CollectionPathMessage
  | PathCompleteMessage
  | FatalErrorMessage;

export interface LogMessage {
  type: "log";
  level: LogLevel;
  message: string;
  data?: any;
}

export interface CollectionPathMessage {
  type: "collection-path";
  path: string;
}

export interface PathCompleteMessage {
  type: "path-complete";
  path: string;
}

export interface FatalErrorMessage {
  type: "fatal-error";
  message: string;
}

export type ToChildMessage =
  | ExportOptionsMessage
  | ImportOptionsMessage
  | DocumentMessage
  | CollectionSnapshotMessage
  | KillMessage;

export interface ExportOptionsMessage {
  type: "config-export";
  identifier: string | number;
  protocol: StorageProtocol;
  path: string;
  options: ExportActionOptions;
}

export interface ImportOptionsMessage {
  type: "config-import";
  identifier: string | number;
  protocol: StorageProtocol;
  path: string;
  options: ImportActionOptions;
}

export interface DocumentMessage {
  type: "document";
  id: string;
  root: string;
  path: string;
  data: any;
}

export interface CollectionSnapshotMessage {
  type: "collection-snapshot";
  path: string;
}

export interface KillMessage {
  type: "kill";
}

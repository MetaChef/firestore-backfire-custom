export interface ExportFirestoreDataOptions {
  /**
   * If `true`, print debug level messages and higher.
   */
  debug?: boolean;

  /**
   * If `true`, print verbose level messages and higher.
   * Takes precendence over {@link debug}.
   */
  verbose?: boolean;

  /**
   * If `true`, all log messages are supressed.
   * Takes precendence over {@link verbose} and {@link debug}.
   */
  quiet?: boolean;

  /**
   * Provide a list of paths to export.
   */
  paths?: string[];

  /**
   * Provide a list of regex patterns that a document path
   * must match to be exported.
   */
  match?: RegExp[];

  /**
   * Provide a list of regex patterns where a document will
   * NOT be exported if its path matches any of the patterns.
   *
   * This check takes precedence over {@link patterns}, meaning
   * that even if a path is matched by {@link patterns}, it will
   * still be ignored if it matches any of {@link ignore}.
   */
  ignore?: RegExp[];

  /**
   * Limit the subcollection depth to export documents from.
   * The root collection has a depth of 0.
   */
  depth?: number;
}

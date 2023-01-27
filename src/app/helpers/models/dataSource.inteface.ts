export class DataSource<T> {
  displayedColumns: Map<String, String> = new Map();
  data: T[] = [];
  columns: String[] = [];
  constructor(
    displayedColumns: Map<String, String>,
    dataSource: T[],
    columns: String[] = []
  ) {
    this.displayedColumns = displayedColumns;
    this.data = dataSource;
    this.columns = columns;
  }
}

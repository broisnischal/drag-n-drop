type OverrideProps<T, R> = Omit<T, keyof R> & R;

export type DragNdropProps = OverrideProps<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  {
    onDrop: (data: any) => void;
    onDragEnter?: (data: any) => void;
    onDragLeave?: (data: any) => void;
    onDragOver?: (data: any) => void;

    onDragStart?: (data: any) => void;
    onDragEnd?: (data: any) => void;

    onDrag?: (data: any) => void;
  }
>;

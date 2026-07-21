type RichTextProps = {
  children: React.ReactNode;
};

export default function RichText({
  children,
}: RichTextProps) {
  return <>{children}</>;
}
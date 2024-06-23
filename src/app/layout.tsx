import styles from "./base.module.scss";

export const metadata = {
  title: "ijustseen",
  description: "created ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  );
}

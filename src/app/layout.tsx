import { Footer } from "@/components/Footer/Footer";
import styles from "./base.module.scss";
import { Container } from "@/components/Container/Container";

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
      <body className={styles.body}>
        <Container>
          {children}
          <Footer></Footer>
        </Container>
      </body>
    </html>
  );
}

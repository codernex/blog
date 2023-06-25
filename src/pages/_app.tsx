import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { RootLayout } from "~/components";
import GlobalProvider from "~/context/global.context";
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <GlobalProvider>
      <SessionProvider session={session}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </SessionProvider>
    </GlobalProvider>
  );
};

export default api.withTRPC(MyApp);

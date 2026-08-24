import CounterProvider from "@/context/CounterContext";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <CounterProvider>{children}</CounterProvider>
  );
}

import { AuthProvider } from "@/context/aula-4/AuthContext";

export default function Layout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <AuthProvider>
      <div className="p-4">
        {children}
      </div>
    </AuthProvider>
  );
}

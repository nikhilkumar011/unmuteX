import "./globals.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: "UnmuteX | Break Hesitation, Build Confidence",
  description: "UnmuteX is the ultimate youth public speaking and confidence-building platform designed to help you speak with clarity, conviction, and zero fear.",
   metadataBase: new URL("https://unmute-x-k3z1.vercel.app/"),
   verification:{
    google:"eWNku-j_IAj1SU3jCdSrlX0D1QYV0Tn4dILSvOLPeZ4"
   }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-full flex flex-col bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

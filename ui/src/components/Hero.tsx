import { HeroSection } from "@/components/blocks/hero-section-dark"

function HeroSectionDemo() {
  return (
    <HeroSection
      id="home"
      title="Welcome to Our Platform"
      subtitle={{
        regular: "Automate Your Digital Transactions ",
        gradient: "With Single Voice Command",
      }}
      description="Talk with our AI to execute tasks"
      ctaText="Get Started"
      ctaHref="/signup"
      bottomImage={{
        light: "https://www.launchuicomponents.com/app-light.png",
        dark: "https://www.launchuicomponents.com/app-dark.png",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}
    />
  )
}
export { HeroSectionDemo }

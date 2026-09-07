import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import {
  Activity,
  Calculator,
  Flame,
  Heart,
  Menu,
  TrendingUp,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FitTrack - Your Fitness Journey Starts Here" },
      {
        name: "description",
        content:
          "FitTrack helps you track fitness, calculate BMI and calories, and stay consistent with your health goals.",
      },
      {
        property: "og:title",
        content: "FitTrack - Your Fitness Journey Starts Here",
      },
      {
        property: "og:description",
        content:
          "Track your fitness, calculate BMI and calories, and stay consistent with your goals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="flex-1">
        <Hero />
        <Features />
        <BMICalculator />
        <WhyFitTrack />
      </main>
      <Footer />
    </div>
  );
}

function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "BMI Calculator", href: "#bmi" },
    { label: "Why FitTrack", href: "#why" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-emerald">
          <Activity className="h-6 w-6" aria-hidden="true" />
          <span>FitTrack</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-emerald"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#bmi"
            className="inline-flex items-center justify-center rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-emerald-foreground shadow-sm transition-all hover:bg-emerald-dark hover:shadow-md"
          >
            Calculate BMI
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background px-4 py-4 md:hidden fade-in">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground transition-colors hover:text-emerald"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#bmi"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-emerald-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Calculate BMI
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-soft/60 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-soft/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center fade-in-up">
        <div className="mb-6 inline-flex items-center rounded-full border border-emerald/20 bg-emerald-soft/50 px-4 py-1.5 text-sm font-medium text-emerald-dark">
          <Heart className="mr-2 h-4 w-4" aria-hidden="true" />
          Simple. Modern. Made for your goals.
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Your Fitness Journey Starts Here
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Track your fitness progress, calculate your BMI, and manage calories
          all in one clean, easy-to-use place. FitTrack helps you stay focused on
          what matters most — your health.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#bmi"
            className="inline-flex w-full items-center justify-center rounded-full bg-emerald px-8 py-3.5 text-base font-semibold text-emerald-foreground shadow-md transition-all hover:bg-emerald-dark hover:shadow-lg sm:w-auto"
          >
            <Calculator className="mr-2 h-5 w-5" aria-hidden="true" />
            Calculate BMI
          </a>
          <a
            href="#features"
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-emerald/30 bg-background px-8 py-3.5 text-base font-semibold text-emerald transition-all hover:border-emerald hover:bg-emerald-soft/50 sm:w-auto"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Calculator,
    title: "BMI Calculator",
    description:
      "Quickly check your body mass index and see where you stand with a simple, clear result.",
    href: "#bmi",
  },
  {
    icon: Flame,
    title: "Calorie Calculator",
    description:
      "Estimate daily calorie needs based on your activity level and personal goals.",
    href: "#features",
  },
  {
    icon: TrendingUp,
    title: "Fitness Tracking",
    description:
      "Log workouts, monitor progress, and build healthier habits over time.",
    href: "#features",
  },
];

function Features() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to stay on track
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Three simple tools designed to help you understand your body and keep
            moving forward.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <a
              key={feature.title}
              href={feature.href}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-soft text-emerald transition-colors group-hover:bg-emerald group-hover:text-emerald-foreground">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function getBMICategory(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", color: "text-blue-600" };
  if (bmi < 25) return { label: "Healthy", color: "text-emerald" };
  if (bmi < 30) return { label: "Overweight", color: "text-amber-600" };
  return { label: "Obese", color: "text-red-600" };
}

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<{
    bmi: number;
    category: { label: string; color: string };
  } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const heightInMeters = h / 100;
      const bmi = w / (heightInMeters * heightInMeters);
      setResult({ bmi: parseFloat(bmi.toFixed(1)), category: getBMICategory(bmi) });
    }
  };

  return (
    <section id="bmi" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg fade-in-up">
          <div className="bg-emerald-soft/50 px-6 py-10 text-center sm:px-12">
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald text-emerald-foreground">
              <Calculator className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              BMI Calculator
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Enter your height and weight below to get your BMI and health
              category instantly.
            </p>
          </div>

          <div className="px-6 py-10 sm:px-12">
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="height"
                    className="text-sm font-medium text-foreground"
                  >
                    Height (cm)
                  </label>
                  <input
                    id="height"
                    type="number"
                    min="1"
                    step="0.1"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 175"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none ring-offset-background transition-all placeholder:text-muted-foreground focus:border-emerald focus:ring-2 focus:ring-emerald/30"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="weight"
                    className="text-sm font-medium text-foreground"
                  >
                    Weight (kg)
                  </label>
                  <input
                    id="weight"
                    type="number"
                    min="1"
                    step="0.1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 70"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none ring-offset-background transition-all placeholder:text-muted-foreground focus:border-emerald focus:ring-2 focus:ring-emerald/30"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-emerald px-6 py-3.5 text-base font-semibold text-emerald-foreground shadow-md transition-all hover:bg-emerald-dark hover:shadow-lg"
              >
                Calculate BMI
              </button>
            </form>

            {result && (
              <div className="mt-8 rounded-2xl border border-emerald/20 bg-emerald-soft/30 p-6 text-center fade-in-up">
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Your BMI
                </p>
                <p className="mt-2 text-5xl font-extrabold text-foreground">
                  {result.bmi}
                </p>
                <p className="mt-2 text-lg font-medium text-muted-foreground">
                  Category:{" "}
                  <span className={`font-semibold ${result.category.color}`}>
                    {result.category.label}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyFitTrack() {
  return (
    <section id="why" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why FitTrack?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              FitTrack is built to make fitness feel simple. We believe the best
              health tools are the ones you actually use — so we stripped away the
              clutter and kept only what helps you move forward.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Understand your body with clear BMI insights",
                "Set realistic calorie goals without the guesswork",
                "Build consistency with easy fitness tracking",
                "Enjoy a clean, distraction-free experience",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald text-emerald-foreground">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative fade-in-up" style={{ animationDelay: "150ms" }}>
            <div className="absolute inset-0 rounded-3xl bg-emerald-soft/50 blur-2xl" />
            <div className="relative rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-soft text-emerald">
                    <Activity className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Daily Steps</p>
                    <p className="text-2xl font-bold text-foreground">8,432</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-soft text-emerald">
                    <Flame className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Calories Burned</p>
                    <p className="text-2xl font-bold text-foreground">1,840</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-soft text-emerald">
                    <TrendingUp className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Weekly Progress</p>
                    <p className="text-2xl font-bold text-foreground">+12%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-emerald"
          >
            <Activity className="h-6 w-6" aria-hidden="true" />
            <span>FitTrack</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#home"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-emerald"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-emerald"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-emerald"
            >
              Contact
            </a>
          </nav>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FitTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

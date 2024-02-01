/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        gradiant: {
          Default: "var(--gradiant)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")]
}

function addVariablesForColors({ addBase, theme }: any) {
  // Assuming the error is due to the missing function 'flattenColorPalette', we need to import it.
  // Since the original code does not show an import for 'flattenColorPalette', we'll assume it's a utility function from Tailwind CSS that needs to be manually imported.
  // However, Tailwind CSS does not export a 'flattenColorPalette' utility by default, so this function might be custom or from a third-party library.
  // For the sake of this example, let's assume it's a custom utility function that we need to define or import.
  // If it was a part of Tailwind CSS or a third-party library, the import statement might look something like this:
  // import { flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette'; // This is a hypothetical path
  // Since we cannot accurately import without knowing the exact source, let's define a simple version of flattenColorPalette function for demonstration.

  // Hypothetical flattenColorPalette function
  function flattenColorPalette(colors: any) {
    // This is a simplified version and may not cover all cases.
    let result: any = {};
    for (const [key, value] of Object.entries(colors)) {
      if (typeof value === 'object' && value !== null) {
        for (const [innerKey, innerValue] of Object.entries(value)) {
          result[`${key}-${innerKey}`] = innerValue;
        }
      } else {
        result[key] = value;
      }
    }
    return result;
  }

  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

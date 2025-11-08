// Theme utility classes helper
// Beautiful Soft Palette for Light Mode:
// - Very Soft Off-White (#FAF9F7): Main background
// - Soft Tan/Beige (#F0EBE3): Secondary backgrounds for cards
// - Warmer Tan (#E4DED4): Tertiary accents
// - Beautiful Coral/Terracotta (#E07A5F): Highlights and buttons
// - Deep Teal (#3D5A80): Special elements
// - Gray (#6B7280): Secondary text

export const getThemeClasses = (theme: 'dark' | 'light') => ({
  // Backgrounds
  bg: theme === 'dark' ? 'bg-[#232223]' : 'bg-[#FAF9F7]', // Soft off-white
  bgSecondary: theme === 'dark' ? 'bg-white/5' : 'bg-[#F0EBE3]', // Soft tan/beige
  bgTertiary: theme === 'dark' ? 'bg-white/10' : 'bg-[#E4DED4]', // Warmer tan

  // Text colors
  text: theme === 'dark' ? 'text-[#f9f9f9]' : 'text-[#1a1a1a]', // Deep charcoal for readability
  textSecondary: theme === 'dark' ? 'text-white/60' : 'text-[#6B7280]', // Gray
  textMuted: theme === 'dark' ? 'text-white/40' : 'text-[#9CA3AF]', // Lighter gray

  // Accent colors
  accentCoral: theme === 'dark' ? 'text-orange-400' : 'text-[#E07A5F]',
  accentTeal: theme === 'dark' ? 'text-teal-400' : 'text-[#3D5A80]',

  // Borders
  border: theme === 'dark' ? 'border-white/10' : 'border-[#E4DED4]', // Warmer tan border
  borderStrong: theme === 'dark' ? 'border-white/20' : 'border-[#D4C5B9]', // Darker tan

  // Hover states
  hoverBg: theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-[#E4DED4]', // Warmer tan on hover
  hoverText: theme === 'dark' ? 'hover:text-white' : 'hover:text-[#1a1a1a]',
  hoverAccent: theme === 'dark' ? 'hover:text-orange-300' : 'hover:text-[#D16B4E]', // Darker coral on hover

  // Buttons
  primaryButton: theme === 'dark'
    ? 'bg-white text-black hover:bg-white/90'
    : 'bg-[#E07A5F] text-white hover:bg-[#D16B4E] shadow-lg hover:shadow-xl', // Beautiful coral button
  secondaryButton: theme === 'dark'
    ? 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
    : 'bg-[#F0EBE3] text-[#1a1a1a] border border-[#E4DED4] hover:bg-[#E4DED4] hover:border-[#D4C5B9]', // Soft tan button

  // Special elements
  cardHover: theme === 'dark'
    ? 'hover:bg-white/10 hover:border-white/20'
    : 'hover:bg-[#F0EBE3] hover:border-[#D4C5B9] hover:shadow-md',
  link: theme === 'dark'
    ? 'text-white/60 hover:text-white'
    : 'text-[#E07A5F] hover:text-[#D16B4E]',
});

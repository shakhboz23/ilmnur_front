import _shorts from "@/assets/svg/sidebar/shorts.svg";
import _subscription from "@/assets/svg/sidebar/subscription.svg";
import _category from "@/assets/svg/sidebar/category.svg";
import _history from "@/assets/svg/sidebar/history.svg";
import _group from "@/assets/svg/sidebar/group.svg";
import _settings from "@/assets/svg/sidebar/settings.svg";
import _lessons from "@/assets/svg/sidebar/lessons.svg";
// import _myclass from "@/assets/svg/sidebar/shorts.svg";
// import _class from "@/assets/svg/sidebar/shorts.svg";
// import _reyting from "@/assets/svg/sidebar/reyting.svg";
// import _news from "@/assets/svg/sidebar/shorts.svg";
// import _children from "@/assets/svg/sidebar/shorts.svg";

export const sidebar = [
  {
    id: 1,
    name: "Asosiy",
    url: "/",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: ["admin"],
  },
  {
    id: 1,
    name: "Lavhalar",
    url: "/shorts",
    svg: _shorts,
    // svgActive: dashboardActive,
    // role: ["admin"],
    role: ["admin"],
  },
  {
    id: 1,
    name: "Obunalar",
    url: "/subscriptions",
    svg: _subscription,
    // svgActive: dashboardActive,
    role: ["admin"],
  },
  // {
  //   id: 1,
  //   name: "Kategoriyalar",
  //   url: "/categories",
  //   svg: _category,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  {
    id: 1,
    name: "Tarix",
    url: "/history",
    svg: _history,
    // svgActive: dashboardActive,
    role: ["admin"],
  },
  // {
  //   id: 1,
  //   name: "Playlists",
  //   url: "/playlists",
  //   svg: _lessons,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  {
    id: 1,
    name: "Guruhlaringiz",
    url: "/my_groups",
    svg: _group,
    // svgActive: dashboardActive,
    role: [],
  },
  // {
  //   id: 1,
  //   name: "Sinflar",
  //   url: "/",
  //   svg: _class,
  //   // svgActive: dashboardActive,
  //   role: ["admin", "teacher"],
  // },
  // {
  //   id: 1,
  //   name: "Yangiliklar",
  //   url: "/",
  //   svg: _news,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  {
    id: 1,
    name: "Sozlamalar",
    url: "/settings",
    svg: _settings,
    // svgActive: dashboardActive,
    role: [],
  },
];

export const group_sidebar = [
  {
    id: 1,
    name: "Dashboard",
    url: "/my_groups",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Groups",
    url: "/my_groups/groups",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Analytics",
    url: "/my_groups/analytics",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  // {
  //   id: 1,
  //   name: "Comments",
  //   url: "/my_groups/comments",
  //   svg: _lessons,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  {
    id: 1,
    name: "Earn",
    url: "/my_groups/earn",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
];

export const settings_sidebar = [
  {
    id: 1,
    name: "Profile",
    url: "/settings",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Account",
    url: "/settings/account",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Password",
    url: "/settings/password",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  // {
  //   id: 1,
  //   name: "Notifications",
  //   url: "/settings/notifications",
  //   svg: _lessons,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  // {
  //   id: 1,
  //   name: "Chat",
  //   url: "/settings/chat",
  //   svg: _lessons,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  // {
  //   id: 1,
  //   name: "Communities",
  //   url: "/settings/communities",
  //   svg: _lessons,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  // {
  //   id: 1,
  //   name: "Referrals",
  //   url: "/settings/account",
  //   svg: _lessons,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  {
    id: 1,
    name: "Payment methods",
    url: "/settings/payment",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Payment history",
    url: "/settings/payment-history",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
];


export const group_settings_sidebar = [
  {
    id: 1,
    name: "Dashboard",
    url: "?tab=dashboard",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "To'lovlar",
    url: "?tab=payments",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
];

export const group_settings = [
  {
    id: 1,
    name: "Dashboard",
    url: "dashboard",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Courses",
    url: "courses",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Payouts",
    url: "payouts",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Invite",
    url: "invite",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "General",
    url: "general",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1, name: "Subscriptions",
    url: "subscriptions",
    svg: _lessons,
    // svgActive: dashboardActive, 
    role: [],
  },
  // {
  //   id: 1, name: "Categories",
  //   url: "categories",
  //   svg: _lessons,
  //   // svgActive: dashboardActive, 
  //   role: [],
  // },
  // {
  //   id: 1, name: "Plugins",
  //   url: "plugins",
  //   svg: _lessons,
  //   // svgActive: dashboardActive, 
  //   role: [],
  // },
  {
    id: 1, name: "Analytics",
    url: "analytics",
    svg: _lessons,
    // svgActive: dashboardActive, 
    role: [],
  },
  // {
  //   id: 1, name: "Discovery",
  //   url: "discovery",
  //   svg: _lessons,
  //   // svgActive: dashboardActive, 
  //   role: [],
  // },
  // {
  //   id: 1, name: "Links",
  //   url: "links",
  //   svg: _lessons,
  //   // svgActive: dashboardActive, 
  //   role: [],
  // },
  {
    id: 1, name: "Payments",
    url: "payments",
    svg: _lessons,
    // svgActive: dashboardActive, 
    role: [],
  },
];

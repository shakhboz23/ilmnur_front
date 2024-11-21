import _class from "@/assets/svg/icon/useravatar.svg";
import _myclass from "@/assets/svg/icon/useravatar.svg";
import _shorts from "@/assets/svg/sidebar/shorts.svg";
import _settings from "@/assets/svg/icon/useravatar.svg";
import _lessons from "@/assets/svg/sidebar/lessons.svg";
import _reyting from "@/assets/svg/sidebar/reyting.svg";
import _news from "@/assets/svg/icon/useravatar.svg";
import _children from "@/assets/svg/icon/useravatar.svg";

export const sidebar = [
  {
    id: 1,
    name: "Home",
    url: "/",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: ["admin"],
  },
  {
    id: 1,
    name: "Shorts",
    url: "/shorts",
    svg: _shorts,
    // svgActive: dashboardActive,
    // role: ["admin"],
    role: ["admin"],
  },
  {
    id: 1,
    name: "Subscriptions",
    url: "/subscriptions",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: ["admin"],
  },
  {
    id: 1,
    name: "Categories",
    url: "/categories",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "History",
    url: "/history",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: ["admin"],
  },
  {
    id: 1,
    name: "Playlists",
    url: "/playlists",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Your groups",
    url: "/my_groups",
    svg: _reyting,
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
    url: "/",
    svg: _lessons,
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
  {
    id: 1,
    name: "Comments",
    url: "/my_groups/comments",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Earn",
    url: "/my_groups/earn",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: [],
  },
];

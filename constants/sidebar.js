import _class from "@/assets/svg/icon/useravatar.svg";
import _myclass from "@/assets/svg/icon/useravatar.svg";
import _message from "@/assets/svg/icon/useravatar.svg";
import _settings from "@/assets/svg/icon/useravatar.svg";
import _lesson from "@/assets/svg/icon/useravatar.svg";
import _reyting from "@/assets/svg/icon/useravatar.svg";
import _news from "@/assets/svg/icon/useravatar.svg";
import _children from "@/assets/svg/icon/useravatar.svg";

export const sidebar = [
  {
    id: 1,
    name: "Foydalanuvchilar",
    url: "/",
    svg: _lesson,
    // svgActive: dashboardActive,
    role: ["admin"],
  },
  {
    id: 1,
    name: "To'lovlar",
    url: "/payments",
    svg: _lesson,
    // svgActive: dashboardActive,
    // role: ["admin"],
    role: ["admin"],
  },
  {
    id: 1,
    name: "O'qituvchilar",
    url: "/teachers",
    svg: _lesson,
    // svgActive: dashboardActive,
    role: ["admin"],
  },
  {
    id: 1,
    name: "O'quvchilar",
    url: "/students",
    svg: _lesson,
    // svgActive: dashboardActive,
    role: ["admin"],
  },
  {
    id: 1,
    name: "Darsliklar",
    url: "/subjects",
    svg: _lesson,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Reyting",
    url: "/reyting",
    svg: _reyting,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Sinflar",
    url: "/classes",
    svg: _class,
    // svgActive: dashboardActive,
    role: ["admin", "teacher"],
  },
  {
    id: 1,
    name: "Yangiliklar",
    url: "/news",
    svg: _news,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Sozlamalar",
    url: "/settings",
    svg: _lesson,
    // svgActive: dashboardActive,
    role: [],
  },
];
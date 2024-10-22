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
    url: "/",
    svg: _lesson,
    // svgActive: dashboardActive,
    // role: ["admin"],
    role: ["admin"],
  },
  {
    id: 1,
    name: "O'qituvchilar",
    url: "/",
    svg: _lesson,
    // svgActive: dashboardActive,
    role: ["admin"],
  },
  {
    id: 1,
    name: "O'quvchilar",
    url: "/",
    svg: _lesson,
    // svgActive: dashboardActive,
    role: ["admin"],
  },
  {
    id: 1,
    name: "Darsliklar",
    url: "/",
    svg: _lesson,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Reyting",
    url: "/",
    svg: _reyting,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Sinflar",
    url: "/",
    svg: _class,
    // svgActive: dashboardActive,
    role: ["admin", "teacher"],
  },
  {
    id: 1,
    name: "Yangiliklar",
    url: "/",
    svg: _news,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Sozlamalar",
    url: "/",
    svg: _lesson,
    // svgActive: dashboardActive,
    role: [],
  },
];
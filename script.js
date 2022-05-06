"use-strict";

import { MenuController } from "./build/controllers/Menu.controller.js";
import { CreateMenuSvg } from "./build/svg/menu.svg.js";

function homeControllers() {
  CreateMenuSvg();
  MenuController();
}
homeControllers();

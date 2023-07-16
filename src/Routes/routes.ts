import { UserController, OrganizationController, InstitutionController, FieldController, SportController } from "../controller"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "get",
    route: "/organization",
    controller: OrganizationController,
    action: "all"
}, {
    method: "get",
    route: "/organization/id",
    controller: OrganizationController,
    action: "one"
}, {
    method: "post",
    route: "/organization",
    controller: OrganizationController,
    action: "save"
}, {
    method: "delete",
    route: "/organization/id",
    controller: OrganizationController,
    action: "remove"
}, {
    method: "get",
    route: "/institution",
    controller: InstitutionController,
    action: "all"
}, 
 {
    method: "get",
    route: "/institution/test",
    controller: InstitutionController,
    action: "getNearbyInstitutions"
},
{
    method: "get",
    route: "/institution/id",
    controller: InstitutionController,
    action: "one"
}, {
    method: "post",
    route: "/institution",
    controller: InstitutionController,
    action: "save"
}, {
    method: "delete",
    route: "/institution/id",
    controller: InstitutionController,
    action: "remove"
}, 
{
    method: "get",
    route: "/field",
    controller: FieldController,
    action: "all"
}, {
    method: "get",
    route: "/field/id",
    controller: FieldController,
    action: "one"
}, 
{
    method: "post",
    route: "/field",
    controller: FieldController,
    action: "save"
}, {
    method: "delete",
    route: "/field/id",
    controller: FieldController,
    action: "remove"
},{
  method: "get",
  route: "/sports",
  controller: SportController,
  action: "all"
}, {
  method: "get",
  route: "/sports/:id",
  controller: SportController,
  action: "one"
}, {
  method: "post",
  route: "/sports",
  controller: SportController,
  action: "save"
}, {
  method: "delete",
  route: "/sports/:id",
  controller: SportController,
  action: "remove"
}];

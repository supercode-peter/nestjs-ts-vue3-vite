/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 11:12:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-18 16:58:27
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/entities/menu.entity.ts
 * @Description:
 *
 */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";
//每个实体对应的就是数据库中的表
@Entity("MenuList", { comment: "菜单" })
export class MenuList {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100, comment: "菜单名" })
  name: string;
  @Column({ comment: "是否总是显示" })
  alwaysShow?: boolean;
  @Column({ length: 100, comment: "菜单标题" })
  title: string;
  @Column({ comment: "父id" })
  parentId?: string;
  @Column({ comment: "icon图标" })
  icon: string;
  @Column({ comment: "路径" })
  path: string;
  @Column({ comment: "组件" })
  component: string;
  @Column({ comment: "是否隐藏" })
  hidden?: boolean;
  @Column({ comment: "是否缓存" })
  keepAlive?: boolean;
  @Column({ comment: "排序" })
  order?: number;
  @Column({ comment: "重定向" })
  redirect?: string;
  @Column({ comment: "菜单权限名" })
  code: string;
  @Column({ comment: "按钮权限名" })
  permissions?: string;
  children?: MenuList[];
  @Column({ comment: "表单id" })
  formId?:string;
}

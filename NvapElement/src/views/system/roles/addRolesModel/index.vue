<!--
 * @Author: Nie Chengyong
 * @Date: 2023-03-04 18:58:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-26 11:03:24
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/system/roles/addRolesModel/index.vue
 * @Description: 
 * 
-->
<template>
  <NvapModal @register="modalRegister" class="NvapModal" @on-ok="addRoles">
    <template #default>
      <NvapForm ref="formRef" @register="register" @reset="handleReset" class="NvapForm">
        <template #statusSlot="{ model, field }">
          <n-input v-model:value="model[field]" />
        </template>
      </NvapForm>
    </template>
  </NvapModal>
</template>

<script setup lang="ts" name="addRolesModel">
  import { useModal } from '@/components/Modal';
  import { useForm } from '@/components/Form/index';
  import { schemas } from '../rolesColumns';
  const [
    modalRegister,
    { openModal: openModal, closeModal: closeModal, setSubLoading: setSubLoading },
  ] = useModal({
    title: '添加角色',
    width:700,
    height: 550,
  });
  const [register, { validate, getFieldsValue, setSchemas }] = useForm({
    gridProps: { cols: 1 },
    collapsedRows: 3,
    labelWidth: 120,
    layout: Layout_Enum.horizontal,
    showActionButtonGroup: false,
    schemas,
  });
  const addRoles = async () => {
    try {
      const formRes = await validate();
      if (!formRes) {
        const param = getFieldsValue();
        await createRoles(param);
        closeModal();
        window.$message.success('提交成功');
      }
    } catch (e) {
      window.$message.error('验证失败，请填写完整信息');
      setSubLoading(false);
    }
  };
  const open = async (data) => {
    // await setSchemas('code', {
    //   componentProps: {
    //     placeholder: '请选择菜单',
    //     options: unref(data),
    //     multiple: true,
    //     keyField: 'code',
    //     labelField: 'title',
    //     childrenField: 'children',
    //     onUpdateValue: (e: any) => {
    //       console.log(e);
    //     },
    //   },
    // });
    openModal();
  };
  defineExpose({ open });
  //重置按钮
  const handleReset = () => {};
</script>

<style scoped></style>

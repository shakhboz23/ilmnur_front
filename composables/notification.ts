import { notification } from 'ant-design-vue';
export const useNotification = () => {
  type NotificationType = 'success' | 'info' | 'warning' | 'error';

  const openNotification = (type: NotificationType, message: string, description: string) => {
    notification[type]({
      message,
      description,
      placement: 'topRight',
    });
  };

  return {
    openNotification,
  };
};

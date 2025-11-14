import React from 'react';
import { Tooltip, Button } from '@arco-design/web-react';
import type { ButtonProps } from '@arco-design/web-react/es/Button';
import type { TooltipProps } from '@arco-design/web-react/es/Tooltip';

export interface IconButtonProps {
  /** Tooltip 显示的内容 */
  tooltip?: string;
  /** 图标组件 */
  icon: React.ReactNode;
  /** Button 组件的其他属性 */
  buttonProps?: ButtonProps;
  /** Tooltip 组件的其他属性 */
  tooltipProps?: Omit<TooltipProps, 'content'>;
  /** 点击事件 */
  onClick?: () => void;
}

/**
 * IconButton 组件 - 统一管理带 Tooltip 的图标按钮
 *
 * @example
 * ```tsx
 * <IconButton
 *   tooltip="刷新"
 *   icon={<IconSync />}
 *   onClick={() => console.log('clicked')}
 * />
 * ```
 */
export const IconButton: React.FC<IconButtonProps> = ({
  tooltip,
  icon,
  buttonProps,
  tooltipProps,
  onClick
}) => {
  const buttonElement = (
    <Button {...buttonProps} onClick={onClick}>
      {icon}
    </Button>
  );

  // 如果没有 tooltip，直接返回 button
  if (!tooltip) {
    return buttonElement;
  }

  // 有 tooltip 时，用 Tooltip 包裹
  return (
    <Tooltip content={tooltip} {...tooltipProps}>
      {buttonElement}
    </Tooltip>
  );
};

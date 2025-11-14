import React from 'react';
import { Space, Divider } from '@arco-design/web-react';
import { IconSync, IconStar, IconStamp, IconThunderbolt } from '@arco-design/web-react/icon';
import { IconButton } from './IconButton';

/**
 * 使用示例：使用 IconButton 组件简化代码
 */
const App = () => {
  return (
    <Space size='mini'>
      <IconButton
        tooltip="Abort Shmoo"
        icon={<IconSync />}
        onClick={() => console.log('Abort Shmoo clicked')}
      />

      <IconButton
        tooltip="Add Shmoo"
        icon={<IconStar />}
        onClick={() => console.log('Add Shmoo clicked')}
      />

      <IconButton
        tooltip="Add Shop"
        icon={<IconStamp />}
        onClick={() => console.log('Add Shop clicked')}
      />

      <Divider type="vertical" />

      <IconButton
        tooltip="Add Shpp"
        icon={<IconThunderbolt />}
        onClick={() => console.log('Add Shpp clicked')}
      />
    </Space>
  );
};

/**
 * 高级用法示例：自定义 Button 和 Tooltip 属性
 */
const AdvancedExample = () => {
  return (
    <Space size='mini'>
      {/* 带有自定义 Button 样式 */}
      <IconButton
        tooltip="删除"
        icon={<IconSync />}
        buttonProps={{
          type: 'primary',
          status: 'danger',
          size: 'small'
        }}
      />

      {/* 带有自定义 Tooltip 位置 */}
      <IconButton
        tooltip="提示信息"
        icon={<IconStar />}
        tooltipProps={{
          position: 'bottom',
          color: '#165DFF'
        }}
      />

      {/* 禁用状态 */}
      <IconButton
        tooltip="禁用按钮"
        icon={<IconStamp />}
        buttonProps={{
          disabled: true
        }}
      />

      {/* 没有 Tooltip */}
      <IconButton
        icon={<IconThunderbolt />}
        onClick={() => console.log('No tooltip')}
      />
    </Space>
  );
};

/**
 * 配合数据驱动的用法
 */
const DataDrivenExample = () => {
  const iconButtons = [
    {
      id: 'sync',
      tooltip: 'Abort Shmoo',
      icon: <IconSync />,
      onClick: () => console.log('Abort Shmoo clicked')
    },
    {
      id: 'star',
      tooltip: 'Add Shmoo',
      icon: <IconStar />,
      onClick: () => console.log('Add Shmoo clicked')
    },
    {
      id: 'stamp',
      tooltip: 'Add Shop',
      icon: <IconStamp />,
      onClick: () => console.log('Add Shop clicked')
    },
  ];

  return (
    <Space size='mini'>
      {iconButtons.map(btn => (
        <IconButton
          key={btn.id}
          tooltip={btn.tooltip}
          icon={btn.icon}
          onClick={btn.onClick}
        />
      ))}
    </Space>
  );
};

export { App, AdvancedExample, DataDrivenExample };

import { Empty } from '@arco-design/web-react';
import { IconExclamation } from '@arco-design/web-react/icon';

const EmptyPage = () => {
  return (
    <Empty
      icon={
        <div
          style={{
            background: '#f2994b',
            display: 'inline-flex',
            borderRadius: '50%',
            width: 50,
            height: 50,
            fontSize: 30,
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
          }}>
          <IconExclamation />
        </div>
      }
      description="Not found, please check you address!"
    />
  );
};

export default EmptyPage;

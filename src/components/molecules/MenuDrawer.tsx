import { memo, FC } from "react";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onclose: () => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const { isOpen, onclose, onClickHome, onClickSetting, onClickUserManagement } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onclose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100" onClick={onClickHome}>TOP</Button>
            <Button w="100" onClick={onClickUserManagement}>ユーザー一覧</Button>
            <Button w="100" onClick={onClickSetting}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});

export default MenuDrawer;

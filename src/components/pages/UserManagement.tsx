import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, FC, useEffect } from "react";
import UserCard from "../organisms/layout/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/layout/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {getUsers, users,loading} = useAllUsers();

  useEffect(() => getUsers(), []);

  const onClickUser = () => onOpen();

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://picsum.photos/800"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});

export default UserManagement;

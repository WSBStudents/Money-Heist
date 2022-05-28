package wsb.application.moneyheist.service;

import wsb.application.moneyheist.dto.UserDto;

public interface UserService {

    UserDto getUserInfo();

    void addUser(UserDto userDto);

}

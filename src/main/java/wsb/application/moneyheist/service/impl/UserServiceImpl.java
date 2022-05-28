package wsb.application.moneyheist.service.impl;

import lombok.AllArgsConstructor;
import lombok.Data;
import ma.glasnost.orika.MapperFacade;
import org.springframework.stereotype.Service;
import wsb.application.moneyheist.dto.BudgetDto;
import wsb.application.moneyheist.dto.UserDto;
import wsb.application.moneyheist.jpa.model.Budget;
import wsb.application.moneyheist.jpa.repository.BudgetRepository;
import wsb.application.moneyheist.service.UserService;

import java.util.List;

@Data
@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    @Override
    public UserDto getUserInfo() {
        return new UserDto(1L, "username_gościa");
    }

}


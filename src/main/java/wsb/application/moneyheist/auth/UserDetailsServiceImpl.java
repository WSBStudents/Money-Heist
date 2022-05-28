package wsb.application.moneyheist.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import wsb.application.moneyheist.dto.UserDto;
import wsb.application.moneyheist.service.UserService;

@Data
@AllArgsConstructor
@Service
public class UserDetailsServiceImpl implements UserDetailsService, UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(final String username) throws UsernameNotFoundException {
        return new UserDetailsImpl(userRepository.findByUsername(username));
    }

    public void addUser(UserDto userDto) {
        User user = new User();
        user.setUsername("admin");
        user.setPassword(passwordEncoder.encode("admin"));
        user.setActive(true);
        userRepository.save(user);
    }

    @Override
    public UserDto getUserInfo() {
        return new UserDto(1L, "username_gościa");
    }
}

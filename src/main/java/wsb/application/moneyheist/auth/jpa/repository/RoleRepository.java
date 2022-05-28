package wsb.application.moneyheist.auth.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wsb.application.moneyheist.auth.jpa.model.ERole;
import wsb.application.moneyheist.auth.jpa.model.Role;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(ERole name);

}

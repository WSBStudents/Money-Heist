package wsb.application.moneyheist.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountDto {

    private Long id;
    private String name;
    private String type;
    private BigDecimal amount;

}

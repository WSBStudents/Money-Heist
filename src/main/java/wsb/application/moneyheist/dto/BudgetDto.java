package wsb.application.moneyheist.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BudgetDto {

    private Long id;
    private String label;
    private BigDecimal amount;
    private String description;

}

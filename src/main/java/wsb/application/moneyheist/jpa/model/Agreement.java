package wsb.application.moneyheist.jpa.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Agreement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String label;
    private BigDecimal amount;
    @ManyToOne
    @JoinColumn(name = "budget_id", nullable = false)
    private Budget budget;
    private String description;
    private String type;

}

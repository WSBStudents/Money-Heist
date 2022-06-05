package wsb.application.moneyheist.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import wsb.application.moneyheist.dto.TransactionDto;
import wsb.application.moneyheist.service.TransactionService;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin
@RequestMapping(value = "/transaction")
public class TransactionCtrl {

    private TransactionService transactionService;

    @GetMapping("/all")
    public List<TransactionDto> getAllTransactionForBudget(@RequestParam final Long id) {
        return transactionService.getAllTransaction(id);
    }

    @GetMapping
    public List<TransactionDto> getTransaction(@RequestParam(required = false) final Integer count) {
        return transactionService.getTransaction(count);
    }

    @PostMapping
    public void addTransaction(@RequestBody final TransactionDto transactionDto) {
        transactionService.addTransaction(transactionDto);
    }

    @DeleteMapping
    public void deleteTransaction(@RequestParam final Long id) {
        transactionService.deleteTransaction(id);
    }
}

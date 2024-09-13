import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return(
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Website Development</td>
              <td>
                <PriceHighLight variant="income">
                  $ 12,000.00
                </PriceHighLight>
              </td>
              <td>Sell</td>
              <td>04/13/2022</td>
            </tr>
            <tr>
              <td width="50%">Burger</td>
              <td>
                <PriceHighLight variant="outcome">
                  -$ 59.00
                </PriceHighLight>
              </td>
              <td>Food</td>
              <td>04/10/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
import { useEffect, useMemo, useState } from "react"
import WalletSelectDropdown from "../WalletSelectDropdown"
import { useApiState } from "@/presale-gg/stores"
import { groupTokens } from "@/presale-gg/util"

/**
 * @param {object} props
 * @param {(token: PaymentToken) => void} props.onChange
 * @param {PaymentToken} props.value
 */
const TokenSelectGrid = ({ onChange, value }) => {
  const apiState = useApiState()
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0)

  const tokenLists = useMemo(() => {
    return groupTokens(apiState.paymentTokens ?? [])
  }, [apiState.paymentTokens])

  useEffect(() => {
    if (tokenLists[selectedGroupIndex].currencies.includes(value)) return
    let groupIndex = tokenLists.findIndex((list) => list.currencies.includes(value))
    if (groupIndex === -1) return
    setSelectedGroupIndex(groupIndex)
  }, [value, selectedGroupIndex, tokenLists])

	return (
		<div className="grid grid-cols-3 gap-2 md:grid-cols-3 py-2">
      {tokenLists.map((list, i) => {
        const selected =
          list.currencies.find((token) => token.id === value?.id) !== undefined && selectedGroupIndex === i;

        return (
          <WalletSelectDropdown
            style={{"grid-column": i === 0 ? "1 / -1" : undefined}}
            tokens={list.currencies}
            onChange={(token) => {
              onChange(token)
              setSelectedGroupIndex(i)
            }}
            value={selected ? value : null}
            defaultLabel={list.defaultLabel}
            placeholder={list.placeholder}
            defaultToken={list.defaultToken}
            selected={selected}
          />
        )
      })}
		</div>
	)
}

export default TokenSelectGrid
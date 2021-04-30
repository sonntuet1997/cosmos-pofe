package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # genesis/types/default
		ClaimList: []*Claim{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in claim
	claimIdMap := make(map[uint64]bool)

	for _, elem := range gs.ClaimList {
		if _, ok := claimIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for claim")
		}
		claimIdMap[elem.Id] = true
	}

	return nil
}

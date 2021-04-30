package pofe

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonntuet1997/pofe/x/pofe/keeper"
	"github.com/sonntuet1997/pofe/x/pofe/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the claim
	for _, elem := range genState.ClaimList {
		k.SetClaim(ctx, *elem)
	}

	// Set claim count
	k.SetClaimCount(ctx, uint64(len(genState.ClaimList)))

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all claim
	claimList := k.GetAllClaim(ctx)
	for _, elem := range claimList {
		elem := elem
		genesis.ClaimList = append(genesis.ClaimList, &elem)
	}

	return genesis
}

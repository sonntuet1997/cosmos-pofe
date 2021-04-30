package cli

import (
	"crypto/sha256"
	"encoding/hex"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sonntuet1997/pofe/x/pofe/types"
	"github.com/spf13/cobra"
	"io/ioutil"
	"strconv"
)

func CmdCreateClaim() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-claim [filepath]",
		Short: "Creates a new claim by passing path",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			hasher := sha256.New()
			s, _ := ioutil.ReadFile(args[0])
			hasher.Write(s)
			argsProof := hex.EncodeToString(hasher.Sum(nil))
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateClaim(clientCtx.GetFromAddress().String(), string(argsProof))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateClaim() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-claim [id] [proof]",
		Short: "Update a claim",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsProof := string(args[1])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateClaim(clientCtx.GetFromAddress().String(), id, string(argsProof))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteClaim() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-claim [id] [proof]",
		Short: "Delete a claim by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteClaim(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

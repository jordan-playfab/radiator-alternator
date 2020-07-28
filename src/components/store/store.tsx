import React, { useState, useEffect } from "react";
import { Page } from "../layout/page";
import { connect } from "react-redux";
import { IAppState } from "../../store";
import { is } from "../../helpers/is";
import { GetTitleId } from "../layout/get-title-id";
import { useStore } from "./use-store";
import { Redirect } from "react-router-dom";
import { routes } from "../../router";

interface IState {
	titleId: string;
	hasPlayer: boolean;
}

type Props = IState;

const StorePageBase: React.FunctionComponent<Props> = React.memo(props => {
	const { hasPlayer, titleId } = props;
	const { getStores, errorMessage } = useStore();
	const [store, setStore] = useState<PlayFabEconomyModels.GetStoreResult>(null);

	useEffect(() => {
		if (is.null(titleId)) {
			return;
		}

		getStores()
			.then(data => {
				setStore(data);
			})
			.catch(() => {});
	}, [getStores, titleId]);

	if (is.null(titleId)) {
		return <GetTitleId />;
	}

	if (!hasPlayer) {
		return <Redirect to={routes.MainMenu(titleId)} />;
	}

	return (
		<Page title="Store">
			<p>{errorMessage}</p>
			{!is.null(store) && (
				<>
					<p>Items:</p>
					<ul>
						{store.ReferencedItems.map(item => (
							<li key={item.Id}>
								{item.Id} : {item.Title["neutral"]}
							</li>
						))}
					</ul>
				</>
			)}
		</Page>
	);
});

export const StorePage = connect<IState>((state: IAppState) => ({
	titleId: state.site.titleId,
	hasPlayer: state.site.hasPlayer,
}))(StorePageBase);

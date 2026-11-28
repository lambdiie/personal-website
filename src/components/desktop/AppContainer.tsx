import { APPS } from "@/lib/apps";
import AppIcon from "./AppIcon";

export default function AppContainer() {
	return (
		<div className="flex flex-col flex-wrap content-start overflow-y-auto p-4">
			{(Object.entries(APPS) as [AppId, AppMeta][]).map(([id, appMeta]) => (
				<AppIcon id={id} img={appMeta.icon} name={appMeta.name} key={id} />
			))}
		</div>
	);
}

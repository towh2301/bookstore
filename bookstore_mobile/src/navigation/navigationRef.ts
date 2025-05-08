import {createNavigationContainerRef} from "@react-navigation/native";
import {RootStackParamList} from "@/navigation/types.ts";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<T extends keyof RootStackParamList>(
	name: T,
	params?: RootStackParamList[T]
) {
	if (navigationRef.isReady()) {
		// @ts-ignore
		navigationRef.navigate(name, params);
	}
}
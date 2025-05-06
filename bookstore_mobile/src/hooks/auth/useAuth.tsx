import {AuthContextType} from "@/src/types/auth/AuthTypes";
import {useContext} from "react";
import {AuthContext} from "@/src/contexts/auth/AuthContext";

/**
 * Custom hook to use the auth context
 */
export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
};
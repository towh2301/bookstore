import {AuthContextType} from "@/types/auth/authTypes";
import {useContext} from "react";
import {AuthContext} from "@/contexts/auth/AuthContext";

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
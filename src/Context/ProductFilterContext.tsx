import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProductFilterContextProps {
    filters: {
        searchTerm: string;
        minPrice: number;
        maxPrice: number;
    };
    sort: 'price' | 'date';
    setFilters: (filters: { searchTerm: string; minPrice: number; maxPrice: number }) => void;
    setSort: (sort: 'price' | 'date') => void;
}

const ProductFilterContext = createContext<ProductFilterContextProps | undefined>(undefined);

export const ProductFilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [filters, setFilters] = useState({
        searchTerm: '',
        minPrice: 0,
        maxPrice: Number.MAX_SAFE_INTEGER,
    });
    const [sort, setSort] = useState<'price' | 'date'>('price');

    return (
        <ProductFilterContext.Provider value={{ filters, sort, setFilters, setSort }}>
            {children}
        </ProductFilterContext.Provider>
    );
};

export const useProductFilter = () => {
    const context = useContext(ProductFilterContext);
    if (!context) {
        throw new Error('useProductFilter must be used within a ProductFilterProvider');
    }
    return context;
};

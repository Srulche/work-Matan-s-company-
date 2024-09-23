export interface AppCardProps {
    app: {
        id: number;
        title: string;
        author: string;
        description: string;
        badge: string;
        rating: number;
        reviews: number,
        downloads: string;
    };
    onClick: () => void;
}
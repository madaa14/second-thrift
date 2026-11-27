export interface ServiceItem {
  id: number;
  domainName: string;
  packageName: string;
  expiredDate: string;
  status: "Aktif" | "Pending" | "Kadaluarsa";
}

export const ServiceItems: ServiceItem[] = [
    {
        id: 101,
        domainName: "budigunawan.id",
        packageName: "Domain.ID",
        expiredDate: "2023-12-31",
        status: "Aktif"
    },
    {
        id: 102,
        domainName: "mywebsite.net",    
    packageName: "Premium Plan",
        expiredDate: "2024-01-15",
        status: "Aktif"
    },
];
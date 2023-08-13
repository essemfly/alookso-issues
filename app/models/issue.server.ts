import type { Issue,  } from "@prisma/client";
import { IssueStatus, IssueBlock } from "@prisma/client";


// import type { Listing, Prisma, SellerVisibility, User } from "@prisma/client";
// import { MarketplaceSide, SignerType } from "@prisma/client";

// import invariant from "tiny-invariant";
// import { prisma } from "~/db.server";

// import {
//   getMostRecentAuctionForListingId,
//   startAuction,
// } from "~/models/auction.server";
// import {
//   requestContractAgentActionViaEmail,
//   sendListingLiveEmail,
//   sendListingNearlyLiveEmail,
// } from "~/utils/mail.server";
// import { createMagicLink } from "~/utils/user-identifying-token.server";
// import {
//   formatDollars,
//   generateDateStrForDate,
//   getFormattedBid,
//   nameForUser,
// } from "~/utils/utils";
// import { getSeller } from "./seller.server";
// import { getUserById } from "./user.server";

// /* Constants */

// export type { Listing } from "@prisma/client";

// export type ListingWithAuction = Prisma.ListingGetPayload<{
//   include: {
//     contractAgentUser: true;
//     auctions: {
//       include: { bids: true };
//     };
//   };
// }>;

// export type ListingWithBuyer = Prisma.ListingGetPayload<{
//   include: {
//     auctions: {
//       orderBy: {
//         createdAt: "desc";
//       };
//       include: {
//         bids: {
//           include: {
//             buyer: {
//               include: {
//                 user: true;
//               };
//             };
//           };
//         };
//       };
//     };
//   };
// }>;

// /* Reads */

// export async function getListing(id: string) {
//   return prisma.listing.findUnique({
//     where: { id },
//     include: {
//       contractAgentUser: true,
//     },
//   });
// }

// // TODO: pagination
// export async function getListingsForSellerId(sellerId: string) {
//   return prisma.listing.findMany({
//     where: { sellerId, deletedAt: null },
//     take: 100,
//     include: {
//       contractAgentUser: true,
//       auctions: {
//         orderBy: {
//           createdAt: "desc",
//         },
//         include: { bids: true },
//       },
//     },
//   });
// }

// export async function getSoldoutListingsWithBuyerForSellerId(sellerId: string) {
//   return prisma.listing.findMany({
//     where: {
//       sellerId,
//       deletedAt: null,
//       auctions: { some: { NOT: { winningBidId: null } } },
//     },
//     take: 100,
//     include: {
//       auctions: {
//         orderBy: {
//           createdAt: "desc",
//         },
//         include: {
//           bids: {
//             include: {
//               buyer: {
//                 include: {
//                   user: true,
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   });
// }

// // TODO: pagination
// export async function getAllListings() {
//   return prisma.listing.findMany({
//     orderBy: { createdAt: "desc" },
//     take: 100,
//   });
// }

// /* Writes */

// export async function upsertIncompleteListing(data: {
//   listingId?: string;
//   sellerId: string;
//   description?: string;
//   creditType?: string;
//   creditAmountCents?: number;
//   dateEligible?: Date;
//   sellerVisibility?: SellerVisibility;
//   indemnification?: number;
//   contractAgentType?: SignerType;
//   contractAgentUserId?: string;
//   startTime?: Date;
//   durationMs?: number;
//   minimumAmountCents?: number;
//   supportingDocs?: string[];
// }) {
//   // create a new object with null values removed
//   const cleanedData = Object.fromEntries(
//     Object.entries(data).filter(
//       ([key, value]) => value && key !== "sellerId" && key !== "listingId"
//     )
//   );
//   const listingFields = [
//     "description",
//     "creditType",
//     "creditAmountCents",
//     "dateEligible",
//     "sellerVisibility",
//     "indemnification",
//     "contractAgentType",
//     "contractAgentUserId",
//   ];
//   const auctionFields = ["startTime", "durationMs", "minimumAmountCents"];
//   const listingData = Object.fromEntries(
//     Object.entries(cleanedData).filter(([key, _]) =>
//       listingFields.includes(key)
//     )
//   );
//   const auctionData = Object.fromEntries(
//     Object.entries(cleanedData).filter(([key, _]) =>
//       auctionFields.includes(key)
//     )
//   );

//   let listing;
//   if (data.listingId) {
//     listing = await prisma.listing.findUnique({
//       where: { id: data.listingId },
//     });

//     invariant(listing, "Listing not found");

//     if (Object.keys(listingData).length) {
//       listing = await prisma.listing.update({
//         where: { id: data.listingId },
//         data: listingData,
//       });
//     }

//     if (Object.keys(auctionData).length) {
//       // find the most recent auction related to the listing
//       const auction = await getMostRecentAuctionForListingId(data.listingId);

//       await prisma.auction.update({
//         where: { id: auction!.id },
//         data: auctionData,
//       });
//     }
//   } else {
//     listing = await prisma.listing.create({
//       data: {
//         ...listingData,
//         seller: {
//           connect: {
//             id: data.sellerId,
//           },
//         },
//         auctions: {
//           create: auctionData,
//         },
//       },
//     });
//   }

//   if (data.supportingDocs && data.supportingDocs.length) {
//     // attach supportDoc IDs to the listing
//     await prisma.listing.update({
//       where: { id: listing.id },
//       data: {
//         supportingDocs: {
//           connect: data.supportingDocs.map((id) => ({ id })),
//         },
//       },
//     });
//   }

//   return listing;
// }

// export async function markListingLiveAsFalse(listingId: string) {
//   return await prisma.listing.update({
//     where: { id: listingId },
//     data: {
//       live: false,
//     },
//   });
// }

// export async function deleteListing(listingId: string) {
//   return await prisma.listing.update({
//     where: { id: listingId },
//     data: {
//       deletedAt: new Date(),
//     },
//   });
// }

// export async function markListingAsSignedAndLive(listingId: string) {
//   let auction = await getMostRecentAuctionForListingId(listingId);
//   invariant(auction, "Auction not found");

//   const listing = await prisma.listing.update({
//     where: { id: listingId },
//     data: {
//       csaSignDate: new Date(),
//       live: true,
//     },
//   });
//   const seller = await getSeller(listing.sellerId);
//   const user = await getUserById(seller!.userId);
//   invariant(user);

//   auction = await startAuction(auction);
//   invariant(auction.endTime !== null);

//   await sendListingLiveEmail({
//     auctionEndTimeFormatted: generateDateStrForDate(auction.endTime),
//     listing: {
//       creditAmountFormatted: formatDollars(listing.creditAmountCents! / 100),
//       creditType: listing.creditType!,
//       id: listing.publicId.toString(),
//       minBidFormatted: getFormattedBid(
//         listing.creditAmountCents!,
//         auction.minimumAmountCents!
//       ),
//       url: `${process.env.BASE_URL}/listings/${listing.id}/review`,
//     },
//     owner: {
//       email: user.email,
//       firstName: user.firstName,
//     },
//   });

//   return listing;
// }

// export async function sendListingToContractAgent(
//   listing: Listing,
//   owner: User,
//   contractAgent: User
// ) {
//   invariant(owner.company, "individual users cannot have contract agents");

//   const auction = await getMostRecentAuctionForListingId(listing.id);
//   invariant(auction, "Auction not found");

//   const caUrl = await createMagicLink(
//     contractAgent,
//     `${process.env.BASE_URL}/listings/${listing.id}`
//   );
//   const listingUrl = `${process.env.BASE_URL}/listings/${listing.id}/review`;

//   const caEmailPromise = requestContractAgentActionViaEmail({
//     contractAgent: {
//       email: contractAgent.email,
//       firstName: contractAgent.firstName,
//     },
//     marketplaceSide: MarketplaceSide.SELL,
//     owner: {
//       company: owner.company,
//       firstName: owner.firstName,
//     },
//     url: caUrl,
//   });
//   const sellerEmailPromise = sendListingNearlyLiveEmail({
//     contractAgentFullName: nameForUser(contractAgent),
//     listing: {
//       creditAmountFormatted: formatDollars(listing.creditAmountCents! / 100),
//       creditType: listing.creditType!,
//       id: listing.publicId.toString(),
//       minBidFormatted: getFormattedBid(
//         listing.creditAmountCents!,
//         auction.minimumAmountCents!
//       ),
//       url: listingUrl,
//     },
//     owner: {
//       email: owner.email,
//       firstName: owner.firstName,
//     },
//   });
//   await Promise.all([caEmailPromise, sellerEmailPromise]);

//   await prisma.listing.update({
//     where: { id: listing.id },
//     data: {
//       contractAgentFirstNotifiedAt: new Date(),
//     },
//   });
// }

// /* Helpers */

// export function isListingPending(listing: Listing) {
//   return (
//     listing.contractAgentType === SignerType.OTHER &&
//     !listing.csaSignDate &&
//     listing.contractAgentFirstNotifiedAt
//   );
// }
